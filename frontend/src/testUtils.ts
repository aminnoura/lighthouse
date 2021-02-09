import { ReactWrapper } from "enzyme";

const flushAllPromises =
    (): Promise<any> =>
        new Promise(resolve => setImmediate(resolve));

export const flushRequestsAndUpdate =
    async (enzymeWrapper: ReactWrapper): Promise<void> => {
        await flushAllPromises();
        enzymeWrapper.update();
    };