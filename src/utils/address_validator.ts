export const validateEvmAddress = (address: string): boolean => {
    const isValidLength = address.length === 42;
    const hasValidPrefix = address.startsWith('0x');
    const isHexadecimal = /^[0-9a-fA-F]+$/.test(address.slice(2));
  
    return isValidLength && hasValidPrefix && isHexadecimal;
  };