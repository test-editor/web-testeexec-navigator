// all events this components pushes for other components to use

// test execution was successfully started and is/should be running,
// payload is { response: Response, path: string, message: string }
export const TEST_EXECUTION_STARTED = 'test.execution.started';
// test execution could not be started,
// payload { path: string, reason: any, message: string }
export const TEST_EXECUTION_START_FAILED = 'test.execution.start.failed';

// a node in the test execution call tree has been selected
// payload is the TreeNode that was selected.
export const TEST_NAVIGATION_SELECT = 'test.navigation.select'; // should be testexectree.navigation.select

export const HTTP_CLIENT_NEEDED = 'httpClient.needed';