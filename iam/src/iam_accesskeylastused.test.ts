const mockGetAccessKeyLastUsed = jest.fn();
jest.mock("@aws-sdk/client-iam/commands/GetAccessKeyLastUsedCommand", () => ({
  IAM: function IAM() {
    this.GetAccessKeyLastUsedCommand = mockGetAccessKeyLastUsed;
  },
}));
//@ts-ignore
import { run } from "./iam_accesskeylastused";

//test function
test("has to mock iam#getAccessKeyLastUsed", async (done) => {
  await run();
  expect(mockGetAccessKeyLastUsed).toHaveBeenCalled;
  done();
});
