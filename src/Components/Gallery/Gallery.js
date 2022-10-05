import React, { useEffect, useState } from "react";
import "../Gallery/Gallery.css";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
const Gallery = () => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const listRef = ref(storage, "birdsImage");

    listAll(listRef)
      .then((res) => {
        let promises = res.items.map((imageRef) => getDownloadURL(imageRef));
        Promise.all(promises).then((urls) => {
          setUrls(urls);
        });

        // console.log("This is the uerl", urls);
      })
      .catch((err) => {
        console.log(err);
      });
    // listAll(listRef).then((res) => {
    // res.prefixes.forEach((folderRef) => {
    //   // All the prefixes under listRef.
    //   // You may call listAll() recursively on them.
    // });
    // res.items.forEach((itemRef) => {
    //   console.log(itemRef);
    // itemRef.getDownloadURL().then((url) => {
    //   console.log("Download URL", url);
    // });

    // All the prefixes under listRef.
    // You may call listAll() recursively on them.
    // });
    // });
  }, []);
  return (
    <>
      <div className="container">
        <div className="section-top-border" id="gallery">
          <div className="text-center">
            <h3>Image Gallery</h3>
            <p>Some Pictures From Our Aviary</p>
          </div>
          <div className="row gallery-item">
            {urls.map((url) => (
              <div className="col-md-4 mt-2 ">
                <a href={url} className="img-pop-up ">
                  <div className="single-gallery-image">
                    <img src={url} className="w-100 h-100 rounded shadow" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Gallery;
