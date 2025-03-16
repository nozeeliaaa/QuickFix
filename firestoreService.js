import firestore from '@react-native-firebase/firestore';

// Add User Profile
export const addUserProfile = async (userId, name, email) => {
  try {
    await firestore().collection('users').doc(userId).set({
      name,
      email,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    console.log('User Profile Added');
  } catch (error) {
    console.error('Error adding user profile:', error);
  }
};

// Add Technician Profile
export const addTechnicianProfile = async (techId, name, specialization) => {
  try {
    await firestore().collection('technicians').doc(techId).set({
      name,
      specialization,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    console.log('Technician Profile Added');
  } catch (error) {
    console.error('Error adding technician profile:', error);
  }
};

// Add Booking Info
export const addBooking = async (bookingId, userId, techId, service, time) => {
  try {
    await firestore().collection('bookings').doc(bookingId).set({
      userId,
      techId,
      service,
      time,
      status: 'pending',
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    console.log('Booking Added');
  } catch (error) {
    console.error('Error adding booking:', error);
  }
};