type TestPackageInput = {
    input1: string;
    input2: string;
    input3: string;
};

declare const testPackage: ({ input1, input2, input3, }: TestPackageInput) => void;

export { type TestPackageInput, testPackage };
