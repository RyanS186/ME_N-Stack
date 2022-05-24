// This component will be used to add 2 <h2> to our page

// React uses Node to export modules, each file can export one thing
// This file will be exporting the function HelloWorld

const HelloWorld = () => {
    return (
        <div>
            <h2>This is an h2</h2>
            <h3>This is an h3</h3>
            <p>This is a p</p>
            <img src="https://cdn.vox-cdn.com/thumbor/1ki4K0JMbr-QT3miFAo9x6I9sxc=/0x0:628x314/1200x0/filters:focal(0x0:628x314):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7409639/n_BIRDS_WITH_ARMS_628x314.jpg" alt="bird" />
        </div>
    )
};

export default HelloWorld;