import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise]).then((values) => {
    const result = [];
    values.forEach((index) => {
      if (index.status === 'fulfilled') {
        result.push({ status: index.status, value: index.value });
      } else {
        result.push({ status: index.status, value: `${index.reason}` });
      }
    });
    return result;
  });
}
