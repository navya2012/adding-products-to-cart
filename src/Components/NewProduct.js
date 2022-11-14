import React from 'react'
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../Redux/Actions'

export const NewProduct = () => {
    const [newProduct, setNewProduct] = React.useState({ title: "", price: "", description: "", image: "", category: "" });
    const dispatch = useDispatch();
    const handleChange = (e) => 
    {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () =>
    {
        setNewProduct({ title: "", price: "", description: "", image: "", category: "" });
        dispatch(addNewProduct(newProduct))
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <h3>Add new product</h3>
                    <form onChange={handleChange}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" name="title" value={newProduct.title} className="form-control" />

                            <label className="form-label">Price</label>
                            <input type="text" name="price" value={newProduct.price} className="form-control" />

                            <label className="form-label">Description</label>
                            <input type="text" name="description" value={newProduct.description} className="form-control" />

                            <label className="form-label">Image url</label>
                            <input type="text" name="image" value={newProduct.image} className="form-control" />

                            <label className="form-label">category</label>
                            <input type="text" name="category" value={newProduct.category} className="form-control" />

                        </div>
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col"></div>

            </div>
        </div>
    )
}
