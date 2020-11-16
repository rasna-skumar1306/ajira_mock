import React from "react";

const LatestCollections = () => {
  const collections = [
    {
      img:
        "https://s3-alpha-sig.figma.com/img/53c8/8f75/4956328fe056cb09869ba46940b32e54?Expires=1606694400&Signature=fxAk~nqN~u5EG54ApBrEzmH0oLEgSUJwbyCoiyDayfbZO6R5Qwq7uAgSzptgHKRtAAlKex2KPKgrtJlZkWZt7rYJM~U32kX69LpBUacZQj8EqmwZxjRVHVTGUgHMhdTfH1uiHS7G4jYfoo25kOnKBGv4Y8FJbgFTCV2IXULMetawJWfRS7rjRYs~dyZ1YqqR4oDMFVNYpDG39h1GxKWcDS0iO4Vwo1hkpjEGiEBsFTFlcSmrXRHeJVun32RO1p~6qJQMulXOTiGnO8HMxczfs7UK2fgpyGf7rIug-DKWJQ4vd5mWJRia~20eG6zCftRDf-LGYB~w1ZNHTKzFPmAWqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      price: "1499.00",
      name: "Printed Polo T-Shirt",
      id: 1,
    },
    {
      img:
        "https://s3-alpha-sig.figma.com/img/6c7c/29e7/7070630908039429318506a39732e089?Expires=1606694400&Signature=IfWmnanrIeRopErm1Nj~egFCpwIZWOEHwv7~QRXFbm1hGjKlA0Rbtqyp30OYyk2z~vWr3Y1jukRa4A8DJ16VzP2qcwEfOBYlpedIdkS0ngzLWeYP5Nrc4OohQpeF2FScFVIdu0oogGQlgot8AhrpM3c46mcfpxR049I77BohQYDiilK7TAXHHGvy0bLTBZyK8UGkSL3ijNMlE4cJMqfLl5K0oHJ6LosOezT1TIVk~kzbvzBGI3CFQyXBHTNiJU58jqTJkhgbL3HKYGEuxsYqRwrkeXYNQ7vhMz4AJkSeQ0yizZlykGsSw-lpJ~emRxdIvJgu-OdM-wY8HMGsd9wkmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      id: 2,
      price: "1499.00",
      name: "Printed Polo T-Shirt",
    },
    {
      img:
        "https://s3-alpha-sig.figma.com/img/53c8/8f75/4956328fe056cb09869ba46940b32e54?Expires=1606694400&Signature=fxAk~nqN~u5EG54ApBrEzmH0oLEgSUJwbyCoiyDayfbZO6R5Qwq7uAgSzptgHKRtAAlKex2KPKgrtJlZkWZt7rYJM~U32kX69LpBUacZQj8EqmwZxjRVHVTGUgHMhdTfH1uiHS7G4jYfoo25kOnKBGv4Y8FJbgFTCV2IXULMetawJWfRS7rjRYs~dyZ1YqqR4oDMFVNYpDG39h1GxKWcDS0iO4Vwo1hkpjEGiEBsFTFlcSmrXRHeJVun32RO1p~6qJQMulXOTiGnO8HMxczfs7UK2fgpyGf7rIug-DKWJQ4vd5mWJRia~20eG6zCftRDf-LGYB~w1ZNHTKzFPmAWqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      price: "1499.00",
      name: "Printed Polo T-Shirt",
      id: 3,
    },
    {
      img:
        "https://s3-alpha-sig.figma.com/img/6c7c/29e7/7070630908039429318506a39732e089?Expires=1606694400&Signature=IfWmnanrIeRopErm1Nj~egFCpwIZWOEHwv7~QRXFbm1hGjKlA0Rbtqyp30OYyk2z~vWr3Y1jukRa4A8DJ16VzP2qcwEfOBYlpedIdkS0ngzLWeYP5Nrc4OohQpeF2FScFVIdu0oogGQlgot8AhrpM3c46mcfpxR049I77BohQYDiilK7TAXHHGvy0bLTBZyK8UGkSL3ijNMlE4cJMqfLl5K0oHJ6LosOezT1TIVk~kzbvzBGI3CFQyXBHTNiJU58jqTJkhgbL3HKYGEuxsYqRwrkeXYNQ7vhMz4AJkSeQ0yizZlykGsSw-lpJ~emRxdIvJgu-OdM-wY8HMGsd9wkmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      id: 4,
      price: "1499.00",
      name: "Printed Polo T-Shirt",
    },
    {
      img:
        "https://s3-alpha-sig.figma.com/img/53c8/8f75/4956328fe056cb09869ba46940b32e54?Expires=1606694400&Signature=fxAk~nqN~u5EG54ApBrEzmH0oLEgSUJwbyCoiyDayfbZO6R5Qwq7uAgSzptgHKRtAAlKex2KPKgrtJlZkWZt7rYJM~U32kX69LpBUacZQj8EqmwZxjRVHVTGUgHMhdTfH1uiHS7G4jYfoo25kOnKBGv4Y8FJbgFTCV2IXULMetawJWfRS7rjRYs~dyZ1YqqR4oDMFVNYpDG39h1GxKWcDS0iO4Vwo1hkpjEGiEBsFTFlcSmrXRHeJVun32RO1p~6qJQMulXOTiGnO8HMxczfs7UK2fgpyGf7rIug-DKWJQ4vd5mWJRia~20eG6zCftRDf-LGYB~w1ZNHTKzFPmAWqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      price: "1499.00",
      name: "Printed Polo T-Shirt",
      id: 5,
    },
  ];

  const displayCollections = () =>
    collections.map((collection) => (
      <div className="collection__content" key={collection.id}>
        <img src={collection.img} alt="picture_model" />
        <p>
          {collection.name} <br />
          <span>{collection.price}</span>
        </p>
      </div>
    ));

  return (
    <div className="latestCollections">
      <div className="latestCollections__header">
        <hr style={{ width: "35%" }} />
        <h3 style={{ fontSize: "20px" }}>LATEST COLLECTIONS</h3>
        <hr style={{ width: "35%" }} />
      </div>
      <div className="latestCollections__content">{displayCollections()}</div>
    </div>
  );
};

export default LatestCollections;
