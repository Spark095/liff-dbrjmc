// Import stylesheets
import './style.css';

// 0. Import LIFF SDK
import liff from '@line/liff';

// Body element
const body = document.getElementById('body');

// Profile elements
const pictureUrl = document.getElementById('pictureUrl');
const userId = document.getElementById('userId');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');
const email = document.getElementById('email');

// Button elements
const btnShare = document.getElementById('btnShare');
const btnmessage = document.getElementById('btnmessage');
const btnlogin = document.getElementById('btnlogin');
async function main() {
  // 2. liff.ready
  liff.ready.then(() => {
    if (liff.getOS() === 'android') {
      body.style.backgroundColor = '#888888';
    }
    if (liff.isInClient()) {
      getUserProfile();
    }
    btnShare.style.display = 'block';
    btnmessage.style.display = 'block';
    btnlogin.style.display = 'block';
    <button onclick="myFunction()">Click me</button>;
  });
  // 3. Try a LIFF function
  // 4. Check where LIFF was opened
  // 5. Call getUserProfile()
  // 10. Show share button

  // 1. Initialize LIFF app)
  await liff.init({ liffId: '1657227764-lx8Kd9x6' });
}
main();

// 6. Create getUserProfile()
// *7. Get email
async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>userId: </b>' + profile.userId;
  displayName.innerHTML = '<b>displayName: </b>' + profile.displayName;
  statusMessage.innerHTML = '<b>statusMessage: </b>' + profile.statusMessage;
  email.innerHTML = '<b>email: </b>' + liff.getDecodedIDToken().email;
}

// *8. Create shareMsg()
async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      type: 'text',
      text: 'This msg was shared by LIFF',
    },
  ]);
  if (result) {
    alert('Msg was shared!');
  } else {
    alert('ShareTargetPicker was cancelled by user');
  }
  liff.closeWindow();
}

async function sendMsg() {
  const result = await liff.sendMessages([
    {
      type: 'text',
      text: 'This msg was Send by Spark',
    },
    {
      type: 'text',
      text: 'This msg was Send by Spark2',
    },
    {
      type: 'text',
      text: 'This msg was Send by Spark3',
    },
  ]);
  if (result) {
    alert('Msg was Send!');
  } else {
    alert('ShareTargetPicker was cancelled by user');
  }
  liff.closeWindow();
}
// 11. Add close window

// 9. Add event listener to share button
btnShare.onclick = () => {
  shareMsg();
};
btnmessage.onclick = () => {
  sendMsg();
};
btnlogin.onclick = () => {
  // alert("Msg was shared!")
  liff.login()
}