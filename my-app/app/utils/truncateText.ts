export const truncateText = (str: string): string => {
    if (str.length < 40) return str;
  
    return str.substring(0,25) + "...";
  };
  