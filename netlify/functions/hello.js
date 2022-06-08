exports.handler = async function (event, context) {
  console.log("testing logs")
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}
