import React, {Component} from 'react';
import '../assets/cardpokemon.scss';
import posed from 'react-pose';

const CardPokemonAnimated = posed.div({
    exit: { opacity: 0 },
    enter: { opacity: 1 }
});

class CardPokemon extends Component {
    componentDidMount = () => {
        console.log(this.props)
    }
    
    render(){
        return (
            <CardPokemonAnimated className="card-poke">
                <div className="card-img">
                    <img src={this.props.sprites.front_default} alt="pokemon pic"/>
                </div>
                <div className="card-stats">
                    {this.props.stats.map(
                        (stat) => 
                            <div className="card-stat" key={stat.stat.name}>
                                <div className="stat-name">
                                    <span>{stat.stat.name.replace('-', ' ')}</span>
                                </div>
                                <div className="stat-progress">
                                    <progress className="progress is-medium" value={stat.base_stat} max="100"></progress>
                                </div>
                            </div>
                        )
                    }
                </div>
            </CardPokemonAnimated>
        );
    }
}

export default CardPokemon
