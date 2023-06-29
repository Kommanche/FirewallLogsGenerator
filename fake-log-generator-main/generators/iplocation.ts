function getLocation(ip: string): string {
    const octets = ip.split('.');
    const firstOctet = parseInt(octets[0]);
  
    if (firstOctet >= 10 && firstOctet <= 20) {
      return "London";
    } else if (firstOctet >= 21 && firstOctet <= 51) {
      return "Manchester";
    } else if (firstOctet >= 51 && firstOctet <= 71) {
      return "Preston";
    } else if (firstOctet >= 71 && firstOctet <= 91) {
      return "Leeds";
    } else if (firstOctet >= 91 && firstOctet <= 101) {
      return "Birmingham";
    } else if (firstOctet >= 101 && firstOctet <= 151) {
      return "London";
    } else {
      return "Unknown";
    }
  }