import React, { useState } from "react";
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root') // makes the background hidden for screen readers

const CreatePost = () => {
    const [topic, setTopic] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleChange = (e) => {
        setTopic(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/generatepost/', { topic });

            // Log the data or display it somehow
            console.log(response.data);
        } catch (error) {
            console.error("An error occurred while creating the post:", error);
        }

        // Close the modal and clear the input field
        setModalIsOpen(false);
        setTopic('');
    }

    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Create New Post</button>

            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Create Post Modal"
            >
                <form onSubmit={handleSubmit}>
                    <label>
                        Topic:
                        <input type="text" name="topic" value={topic} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
}

export default CreatePost;
