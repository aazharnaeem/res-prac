import './Grid.css'

const Grid = () => {
    return (
        <div>
            <h4 style={{ textAlign: 'center' }} >
                FIRST GRID PRACTICE
            </h4>
            <div className="Grid-lvl1-Main" >
                <div className="Grid-lvl1-Child" > Header</div>
                <div className="Grid-lvl1-Child" >
                    Main

                    <div className="Grid-In-Main" >

                        <div className="Grid-IN-Main-child" >1</div>
                        <div className="Grid-IN-Main-child" >2</div>
                        <div className="Grid-IN-Main-child" >3</div>
                        <div className="Grid-IN-Main-child" >4</div>
                        <div className="Grid-IN-Main-child" >5</div>
                        <div className="Grid-IN-Main-child" >6</div>
                        <div className="Grid-IN-Main-child" >7</div>
                        <div className="Grid-IN-Main-child" >8</div>
                        <div className="Grid-IN-Main-child" >9</div>

                    </div>

                </div>
                <div className="Grid-lvl1-Child" > Footer</div>

            </div>
            <br />
            <h4 style={{ textAlign: 'center' }} >
                SECOND GRID PRACTICE
            </h4>
            <div className="Grid-lvl2-Main" >
                <div className="Grid-lvl2-Child" >one</div>
                <div className="Grid-lvl2-Child" >two</div>
            </div>

            <br />
            <h4 style={{ textAlign: 'center' }} >
                THIRD GRID PRACTICE
            </h4>
            <div className="Grid-lvl3-Main" >
                <div className="Grid-lvl3-Child" >A</div>
                <div className="Grid-lvl3-Child" >B</div>
                <div className="Grid-lvl3-Child" >C</div>
            </div>
            <br />
            <h4 style={{ textAlign: 'center' }} >
                FOURTH GRID PRACTICE
            </h4>

            <div className="Grid-lvl4-Main">
                <div className="Grid-lvl4-Child">A</div>
                <div className="Grid-lvl4-Child">B</div>
                <div className="Grid-lvl4-Child">C</div>
                <div className="Grid-lvl4-Child">D</div>
                <div className="Grid-lvl4-Child">E</div>
            </div>


            <br />
            <h4 style={{ textAlign: 'center' }} >
                FIFTH GRID PRACTICE
            </h4>
            <div className="Grid-lvl5-Main" >
                <div className="Grid-lvl5-Child">A</div>
                <div className="Grid-lvl5-Child">B</div>
                <div className="Grid-lvl5-Child">C</div>
                <div className="Grid-lvl5-Child">D</div>
                <div className="Grid-lvl5-Child">E</div>
                <div className="Grid-lvl5-Child">F</div>

            </div>
        </div>
    )
}

export default Grid;