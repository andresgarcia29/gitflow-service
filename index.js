exports.handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello from Lambda and Github!",
        version: "v2"
      }),
    }
    return response
}
