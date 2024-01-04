/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Singleitems = ({items}) => {
   

    return (
        <div>
            {items.map(item => (
                <section className='portfolio' key={item.id}>
                    <div className="img"> <img src={item.img} alt="" /></div>
                    <div className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </div>
                </section>
            ))}

        </div>
    );
};

export default Singleitems;