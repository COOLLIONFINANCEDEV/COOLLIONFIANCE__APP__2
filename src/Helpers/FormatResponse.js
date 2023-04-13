const FormatResponse = (AllData) => {
  const data = AllData.data;

  const ResponseLayout = {
    error: !data.success,
    message: data.message,
    errors: data.errors,
  };

  return ResponseLayout;
};

export default FormatResponse;
