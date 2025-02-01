export function onError(error: any) {
  let message = String(error);

  if (error.response) {
    message = error.response.data;
    if (error.response.data && error.response.data.error) {
      message = error.response.data.error;
    }
  } else if (!(error instanceof Error) && error.message) {
    message = String(error.message);
  } else {
    message = "Unknown error";
  } 

  alert(message);
}
