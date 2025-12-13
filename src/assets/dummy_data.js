async function getDummyData() {
  let url =
    "https://nkb-backend-ccbp-media-static.s3-ap-south-1.amazonaws.com/ccbp_beta/media/content_loading/uploads/c1613f6a-8178-43b1-82c4-35ededd08ef0_data%20%287%29.json";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
const dummyData = await getDummyData();
export default dummyData;
