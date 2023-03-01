import axios from "axios";

const getTORDomain = async () => {
  try {
    const res = await axios.get("https://fridayintel.io/api-dev/darkweb.php", {
      params: {
        domain:
          "zsjvvfabm5v45fcokhfraqxvuggijhpmaybxr3fhokmm7wdnni6tyhad.onion",
      },
    });
    return res;
  } catch (e) {
    return e;
  }
};

const getDomain = async () => {
  try {
    const res = await axios.get("https://fridayintel.io/api-dev/domain.php", {
      params: { domain: "0--0.dev" },
    });
    return res;
  } catch (error) {
    return error;
  }
};

const getUrl = async () => {
  try {
    const res = await axios.get("https://fridayintel.io/api-dev/urls.php", {
      params: { domain: "aaa.aaa" },
    });
    return res;
  } catch (error) {
    return error;
  }
};

const getFiles = async () => {
  try {
    const res = await axios.get("https://fridayintel.io/api-dev/files.php", {
      params: { hash: "324f9a54a0a25126b6321b40f5dcfa97e2cbe016" },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export { getTORDomain, getDomain, getUrl, getFiles };
