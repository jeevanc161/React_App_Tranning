import React from 'react'
import chinchan from '../../static/img/chinchan1.jpg'

export const Contact = () => {
    return (
        <div>
            <h1 className='mt-4 text-center'>Contact Us</h1>
            <div className='row'>
                <div className='col-sm-8'>
                    <div className="card mt-4">
                        <div className='card-body'>
                            <p className='mt-4' >    Destructuring is a characteristic of JavaScript, It is used to take out sections of data from an array or objects, We can assign them to new own variables created by the developer.
                                In destructuring, It does not change an array or any object, it makes a copy of the desired object or array element by assigning them in its own new variables, later we can use this new variable in React (class or functional) components.
                                It makes the code more clear. When we access the props using this keyword, we have to use this/ this.props throughout the program, but by the use of restructuring, we can discard this/ this.props by assigning them in new variables.
                                This is very difficult to monitor props in complex applications, so by assigning these props in new own variables we can make a code more readable.
                            </p>
                            <p>    Destructuring is a characteristic of JavaScript, It is used to take out sections of data from an array or objects, We can assign them to new own variables created by the developer.
                                In destructuring, It does not change an array or any object, it makes a copy of the desired object or array element by assigning them in its own new variables, later we can use this new variable in React (class or functional) components.
                                It makes the code more clear. When we access the props using this keyword, we have to use this/ this.props throughout the program, but by the use of restructuring, we can discard this/ this.props by assigning them in new variables.
                                This is very difficult to monitor props in complex applications, so by assigning these props in new own variables we can make a code more readable.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='col-sm-4'>
                    <div className="card mt-4">
                        <div className='card-body'>
                        <img src={chinchan} width='380px' height='440px' />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
