var amountStatus = "successfull";

switch (amountStatus) {
  case "processing":
    console.log("amount is processing");
    break;

  case "successfull":
    console.log("amount credited");
    break;

  case "failed":
    console.log("failed to credit");
    break;

  default:
    console.log("Something went wrong");
}
