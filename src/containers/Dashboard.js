import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import "../css/Styles.css";
import "./Dashboard.css";
import CardHeader from "./Orders/components/Card/CardHeader";
import Navbar from "./components/Navbar";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function Dashboard() {
  const [images, setImages] = useState([]);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);

  const firestore = getFirestore();
  const storage = getStorage();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setFileSelected(true);
    } else {
      setFileSelected(false);
    }
  };

  const handleUpload = () => {
    if (!fileSelected) {
      toast.error("Please choose a file to upload");
      return;
    }

    const fileInput = document.getElementById("uploadInput");
    const file = fileInput.files[0];

    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, "images/" + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.error("Upload error:", error);
        toast.error("Failed to upload image");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);

          const imageLocation = "images/" + file.name;

          addDoc(collection(firestore, "images"), {
            imageUrl: downloadURL,
            location: imageLocation,
          })
            .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
              toast.success("Image uploaded successfully");
              fetchImages();
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
              toast.error("Failed to upload image");
            });
        });
      }
    );
  };

  const fetchImages = async () => {
    const querySnapshot = await getDocs(collection(firestore, "images"));
    const fetchedImages = [];
    querySnapshot.forEach((doc) => {
      fetchedImages.push({ id: doc.id, ...doc.data() });
    });
    setImages(fetchedImages);
  };

  const handleDelete = async () => {
    if (selectedImage) {
      try {
        await deleteDoc(doc(firestore, "images", selectedImage.id));
        console.log("Document successfully deleted!");
        toast.success("Image deleted successfully");
        setDeleteModalOpen(false);
        setSelectedImage(null);
        fetchImages();
      } catch (error) {
        console.error("Error removing document: ", error);
        toast.error("Failed to delete image");
      }
    }
  };

  useEffect(() => {
    fetchImages();
  }, [firestore]);

  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="container-fluid">
              {/* <h1 className="text-header-reg">Images</h1> */}

              <div className="row mt-4">
                {/* left */}
                <div className="col-lg-3 mb-3">
                  <div className="card text-white">
                    <CardHeader
                      header="Gallery Images"
                      subheading="Upload Image"
                      hasCheck={false}
                    />
                    <div className="card-body">
                      <div className="row card-row d-flex align-items-end">
                        <div className="col-lg-12 p-0">
                          <div className="px-2">
                            {/* Image Preview */}
                            <div className="row">
                              <h2 className="heading my-3">Image Preview</h2>
                              <div
                                id="imagePreview"
                                style={{
                                  width: "100%",
                                  maxHeight: "300px",
                                  overflow: "auto",
                                }}
                              >
                                {selectedImage && (
                                  <img
                                    src={selectedImage.imageUrl}
                                    alt="Uploaded"
                                    className="img-fluid rounded mb-2"
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "100%",
                                      objectFit: "contain",
                                    }}
                                  />
                                )}
                                {!selectedImage && (
                                  <p className="subheading">
                                    No image selected
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Buttons */}
                            <div className="row my-4 mx-1">
                              <h2 className="heading mb-2 px-0">
                                Select Image to Upload
                              </h2>
                              <input
                                type="file"
                                id="uploadInput"
                                className="form-control form-control-dashboard subheading"
                                onChange={handleImageChange}
                              />
                              <hr className="my-4" />
                              <button
                                className="btn btn-primary subheading text-white mb-3"
                                onClick={handleUpload}
                                disabled={!fileSelected}
                              >
                                Upload Image
                              </button>
                              <button
                                className="btn btn-danger subheading text-white"
                                onClick={() => setDeleteModalOpen(true)}
                              >
                                Delete Image
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* right */}
                <div className="col-lg-9">
                  <div className="card text-white">
                  <CardHeader
                      header="Uploaded Collection"
                      subheading="Uploaded Images"
                      hasCheck={false}
                    />
                    <div className="gallery-container">
                      {images.map((image, index) => (
                        <div className="admin-gallery" key={index}>
                          <img
                            src={image.imageUrl}
                            alt="Gallery"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                            }}
                            onClick={() => setSelectedImage(image)}
                          />
                          {/* <div className="image-overlay">
                          <div className="overlay-content">
                            <h3>{image.title}</h3>
                            <button OnClick={}>
                              Delete Image
                            </button>
                          </div>
                        </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-9">
                  <div className="row">
                {images.map((image, index) => (
                  <div className="col-lg-3" key={index}>
                    <div className="admin-gallery" onClick={() => setSelectedImage(image)} style={{ cursor: 'pointer' }}>
                      <img
                        src={image.imageUrl}
                        className=""
                        alt="Gallery"
                        style={{ width: '100%', height: '150px', objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {deleteModalOpen && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Image</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setDeleteModalOpen(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this image?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setDeleteModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
