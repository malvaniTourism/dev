import { Rings } from 'react-loader-spinner'
import LoadingOverlay from 'react-loading-overlay-ts';

const Spinner = (props) => {

    return (
        <div className='mySpinner' style={{ background: props.active && 'rgba(0,0,0,0.5)' }}>
            <LoadingOverlay
                active={props.active}
                fadeSpeed={900}
                spinner={<Rings
                    height="500"
                    width="500"
                    color='#2FDD92'
                    ariaLabel='loading'
                />}
                styles={{
                    overlay: (base) => ({
                        ...base,
                        background: 'rgba(255, 0, 0, 0.5)'
                    })
                }}
            >
            </LoadingOverlay>
        </div>
    )
};

export default Spinner;