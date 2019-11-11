import React, { Component } from 'react'


class MemeGenerator extends Component {
   state = {
            topText: "",
            bottomText: "",
            randomImg: '',
            allMemeImgs: []
        }
   
    
    clickHandler = (event) => {
        event.preventDefault()
        const randInt = Math.floor(Math.random() * this.state.allMemeImgs.length);
        
        this.setState({
            randomImg : this.state.allMemeImgs[randInt].url
        })

    }
    
  
    componentDidMount = () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes[0])
                this.setState({
                    allMemeImgs: memes
                    
                })
                console.log(this.state.allMemeImgs[5])
            }
            )
            
    }

    changeHandler = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }


    render = () => {
        return (
            <div>
                
                <form className="meme-form" onSubmit={this.clickHandler}>
                   
                        <input
                            name='topText'
                            placeholder='Write top text'
                            onChange={this.changeHandler}
                            value={this.state.topText}
                            maxLength='50'
                        />
                    
                        <input
                           
                            name='bottomText'
                            placeholder='Write bottom text'
                            onChange={this.changeHandler}
                            value={this.state.bottomText}
                            maxLength='60'
                        />

                    <button>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt='Press Gen button to generate!!'/>
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText.length > 50 ? 'Sorry! Too long text!' : this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}
export default MemeGenerator