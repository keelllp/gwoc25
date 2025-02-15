// test-connection.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
  try {
    console.log('🔄 Testing MongoDB connection...');
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    // Print partial connection string for verification (hiding credentials)
    const sanitizedUri = process.env.MONGODB_URI.replace(
      /(mongodb\+srv:\/\/)([^@]+)(@.+)/,
      '$1****:****$3'
    );
    console.log('📌 Attempting to connect to:', sanitizedUri);

    // Attempt connection
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('\n✅ MongoDB Connection Successful!');
    console.log('📌 Connected to database:', conn.connection.name);
    console.log('📌 Host:', conn.connection.host);
    console.log('📌 MongoDB version:', conn.version);

    // Test creating a collection
    console.log('\n🔄 Testing database operations...');
    const testCollection = conn.connection.collection('connection_test');
    await testCollection.insertOne({ 
      test: true, 
      timestamp: new Date() 
    });
    console.log('✅ Successfully performed write operation');

    const testDoc = await testCollection.findOne({ test: true });
    console.log('✅ Successfully performed read operation');
    
    await testCollection.deleteMany({ test: true });
    console.log('✅ Successfully performed delete operation');

    console.log('\n🎉 All database operations successful!');
  } catch (error) {
    console.error('\n❌ Connection test failed:', {
      name: (error as Error).name,
      message: (error as Error).message,
      stack: (error as Error).stack
    });
  } finally {
    // Close the connection
    await mongoose.disconnect();
    console.log('\n👋 Connection closed');
    process.exit(0);
  }
}

testConnection();