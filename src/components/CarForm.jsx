import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store/index.jsx";

function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    });

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value));
    };

    const handleCostChange = (e) => {
        dispatch(changeCost(parseInt(e.target.value)));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCar({ name, cost }));
    }

    return (
        <div className='car-form panel'>
            <h4 className='subtitle is-3'>Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className='field-group'>
                    <div className='field'>
                        <label className='label'>Name</label>
                        <input
                            className='input is-expanded'
                            type='text'
                            name='name'
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className='field'>
                        <label className='label'>Cost</label>
                        <input
                            className='input is-expanded'
                            type='number'
                            name='cost'
                            value={cost || ''}
                            onChange={handleCostChange}
                        />
                    </div>
                    <div className='field'>
                        <button className='button is-link' type='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CarForm;