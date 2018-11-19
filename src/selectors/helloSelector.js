const helloSelector = ({ hello }) => ({
  message: hello.message,
  messageToShow: hello.reverse ? hello.message.split('').reverse().join('') : hello.message,
  reverse: hello.reverse,
});

export default helloSelector;
