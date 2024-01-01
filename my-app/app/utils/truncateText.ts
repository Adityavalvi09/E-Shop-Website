export const truncateText = (str: string): string => {
    if (str.length < 60) return str;
  
    return str.substring(0,55) + "...";
  };
  