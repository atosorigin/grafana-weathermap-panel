// const header : RequestInit = {
//     method: 'GET',
//     headers: new Headers(),
//     mode: 'cors',
//     cache: "default"
// };

export const fetchConfFile = (filesUrl: string[]) => {
  let completFile: any[] = [];
  filesUrl.forEach(async url => {
    try {
      let response = await fetch(url);
      let responseJson = await response.json();
      completFile.push(responseJson);
    } catch (error) {
      console.error(error);
    }
    // fetch(url)
    // .then(response => response.json())
    // .then((result) => {
    //     // Console.log(result);
    //     completFile.push(result);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
  });
  return completFile;
};
