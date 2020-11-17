import React from "react";

//this is again a functional component which display the testimonials
const Testimonials = () => {
  // here I have some hardcode info for the testimonials section
  const monials = [
    {
      author: "Vikas",
      content:
        "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
      id: 1,
      img:
        "https://s3-alpha-sig.figma.com/img/2cef/db88/36b4c980a9dcc19c610c6219d65c3dd7?Expires=1606694400&Signature=TRXQGpkJkcvfvgqkW-hgvMXb9ou8exMQ08hAQKTfCMP171dPrt0X~CuPHVKo2lHCPVajIhSpJE5i838aveXIe9kd2wTJ7nxPLx9i0jJevS3AUt1aG2hYajy8zczwGEE8z2V6wzOnwALKEWmUtmfWINo7WyM24sOLUw1JVti15PF9-NHz-vJ~V1odwCP-eRGPzQqQWfcNOZITRpcqnddsEIPBJYECjjIBQ4MOj0~p8yjB56eNDDyvX2~WtqeMtIkEKZYMg4jBQHUZHw0xaRnA3BG1BTSUzmM6ROFRyW9vZ1uw~oeJxOExc2TyGmoHJQJ4lc2G1ah~ZHcJIzfwUK81kw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      author: "Vikas",
      content:
        "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
      id: 2,
      img:
        "https://s3-alpha-sig.figma.com/img/2cef/db88/36b4c980a9dcc19c610c6219d65c3dd7?Expires=1606694400&Signature=TRXQGpkJkcvfvgqkW-hgvMXb9ou8exMQ08hAQKTfCMP171dPrt0X~CuPHVKo2lHCPVajIhSpJE5i838aveXIe9kd2wTJ7nxPLx9i0jJevS3AUt1aG2hYajy8zczwGEE8z2V6wzOnwALKEWmUtmfWINo7WyM24sOLUw1JVti15PF9-NHz-vJ~V1odwCP-eRGPzQqQWfcNOZITRpcqnddsEIPBJYECjjIBQ4MOj0~p8yjB56eNDDyvX2~WtqeMtIkEKZYMg4jBQHUZHw0xaRnA3BG1BTSUzmM6ROFRyW9vZ1uw~oeJxOExc2TyGmoHJQJ4lc2G1ah~ZHcJIzfwUK81kw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      author: "Vikas",
      content:
        "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
      id: 3,
      img:
        "https://s3-alpha-sig.figma.com/img/2cef/db88/36b4c980a9dcc19c610c6219d65c3dd7?Expires=1606694400&Signature=TRXQGpkJkcvfvgqkW-hgvMXb9ou8exMQ08hAQKTfCMP171dPrt0X~CuPHVKo2lHCPVajIhSpJE5i838aveXIe9kd2wTJ7nxPLx9i0jJevS3AUt1aG2hYajy8zczwGEE8z2V6wzOnwALKEWmUtmfWINo7WyM24sOLUw1JVti15PF9-NHz-vJ~V1odwCP-eRGPzQqQWfcNOZITRpcqnddsEIPBJYECjjIBQ4MOj0~p8yjB56eNDDyvX2~WtqeMtIkEKZYMg4jBQHUZHw0xaRnA3BG1BTSUzmM6ROFRyW9vZ1uw~oeJxOExc2TyGmoHJQJ4lc2G1ah~ZHcJIzfwUK81kw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ];

  //svg for a star
  const Star = () => (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 0.335938L8.45 4.69994L13 5.29994L9.655 8.59994L10.517 13.3359L6.5 11.0099L2.483 13.3359L3.345 8.59994L0 5.30194L4.55 4.70194L6.5 0.335938Z"
        fill="#FDC02F"
      />
    </svg>
  );

  //function to display all the testimonials in order
  const displayMonials = () =>
    monials.map((monial) => (
      <div className="monial__content" key={monial.id}>
        <img src={monial.img} alt="author_dp" />
        <div className="comment">
          <h4 style={{ display: "flex", justifyContent: "space-between" }}>
            {monial.author}
            <span>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
          </h4>
          <p>{monial.content}</p>
        </div>
      </div>
    ));

  return (
    <div className="testimonials">
      <h3 style={{ fontSize: "24px" }}>TESTIMONIALS</h3>
      <div className="monials">{displayMonials()}</div>
    </div>
  );
};

export default Testimonials;
