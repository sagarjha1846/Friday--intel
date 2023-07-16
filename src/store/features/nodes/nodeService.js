import { httpCall } from '../../../axios/httpService';

const loadCanvasData = async (search) => {
  const resp = await httpCall(`canvas.php?query=${search}`, 'GET', {}, {});
  return resp;
};

const loadRansomData = async (search) => {
  const resp = await httpCall(
    `ransomesearch.php?group=${search}`,
    'GET',
    {},
    {},
  );
  return resp;
};


export { loadCanvasData, loadRansomData };