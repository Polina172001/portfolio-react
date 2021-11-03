import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import React from 'react'

export class Portfolio extends React.Component {  
    
    constructor(props){
        super(props);
        this.state = {
            selected: "All"
            };
        this.selectFilter = this.selectFilter.bind(this);
    }
    
    projects = [
        {
          img: "https://netology-code.github.io/ra-homeworks/state/filter/i/mon.jpg",
          category: "Business Cards"
        },
        {
          img: "https://netology-code.github.io/ra-homeworks/state/filter/i/200.jpg",
          category: "Websites"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/emi_haze.jpg",
          category: "Websites"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/codystretch.jpg",
          category: "Websites"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/Triangle_003.jpg",
          category: "Business Cards"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/place200x290.png",
          category: "Websites"
        },
        {
          img: "https://netology-code.github.io/ra-homeworks/state/filter/i/200.jpg",
          category: "Websites"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/transmission.jpg",
          category: "Business Cards"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/place200x290_1.png",
          category: "Websites"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/place200x290_2.png",
          category: "Flayers"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/the_ninetys_brand.jpg",
          category: "Websites"
        },
        {
          img: "https://netology-code.github.io/ra-homeworks/state/filter/i/dia.jpg",
          category: "Business Cards"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/Triangle_350x197.jpg",
          category: "Websites"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/emi_haze.jpg",
          category: "Websites"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/transmission.jpg",
          category: "Business Cards"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/Triangle_350x197_1.jpg",
          category: "Websites"
        },
        {
          img:
            "https://netology-code.github.io/ra-homeworks/state/filter/i/place200x290_3.png",
          category: "Flayers"
        }
    ];

    selectFilter = filter => {
      this.setState({selected:filter});
    };
    
    render() {
      let filteredProjects = [];
      if (this.state.selected === "All") {
        filteredProjects = this.projects.slice();
      } else {
        filteredProjects = this.projects.filter(project => (project.category === this.state.selected));
      }
      return (
        <>
          <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected={this.state.selected}
            onSelectFilter={this.selectFilter}
          />
          <ProjectList projects={filteredProjects} />
        </>
      )
    }

}

export default Portfolio