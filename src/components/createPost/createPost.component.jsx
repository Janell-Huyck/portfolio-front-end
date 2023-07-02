import React, { useState } from "react";
import axios from 'axios';
import Modal from 'react-modal';
import Spinner from '../../assets/spinner.gif';
import './createPost.styles.scss';

Modal.setAppElement('#root') // makes the background hidden for screen readers

const CreatePost = ({ onPostCreate }) => {
    const [topic, setTopic] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setTopic(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set isSubmitting to true here

        try {
            const response = await axios.post('http://localhost:8000/api/generatepost/', { topic });
            console.log(response.data);
            if (onPostCreate) {
                onPostCreate(); // Call the function after a successful post creation
            }
        } catch (error) {
            console.error("An error occurred while creating the post:", error);
        } finally {
            setIsSubmitting(false); // And set it to false when done
        }

        setModalIsOpen(false);
        setTopic('');
    }

    const customStyles={
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: {isSubmitting} ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)',
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
            // backgroundColor: 'royalblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },

        content: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            background: {isSubmitting} ? 'white' : 'rgba(0, 0, 0, 0.7)',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            width: '80%',
            maxWidth: '500px',
            zIndex: 10,
        }
    }

    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Create New Post</button>

            <div className="modal-wrapper">
                <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    contentLabel="Create Post Modal"
                    className="modal-content"
                    overlayClassName={isSubmitting ? "modal-overlay" : "modal-overlay-dark"}
                    style={customStyles}
                >
                    <div>
                        <h2>Generating Post...</h2>
                        <img src={Spinner} alt="loading" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Topic:
                            <input type="text" name="topic" value={topic} onChange={handleChange} disabled={isSubmitting} />
                        </label>
                        <input type="submit" value={isSubmitting ? "Submitting..." : "Submit"} disabled={isSubmitting} />
                    </form>
                    <button onClick={() => setModalIsOpen(false)} disabled={isSubmitting}>Close</button>
                </Modal>
                <Modal 
                    isOpen={isSubmitting}
                    onRequestClose={() => this.isOpen(false)}
                    contentLabel="Submitting Spinner"
                    className="modal-content"
                    overlayClassName={isSubmitting ? "modal-overlay" : "Overlay--dark"}
                    style={customStyles}
                >

                </Modal>
            </div>
        </div>
    );
}

export default CreatePost;
