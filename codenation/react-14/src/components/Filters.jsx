import React, { Component } from 'react';


class Filters extends Component {

  constructor(props) {
    super(props);
    this.handleTextFilter = this.handleTextFilter.bind(this);
    this.handleButtonFilter = this.handleButtonFilter.bind(this);
  }

  handleTextFilter(event) {
    this.props.onTextFilter(event.target.value);
	}
	
  handleButtonFilter(event) {
    this.props.onButtonFilter(event.target.name)
  }

  render() {
		
    const sorted = this.props.sort

    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={this.handleTextFilter}
              value={this.props.filterText}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className={`filters__item ${sorted === "name" ? "is-selected" : ""}`}
            type="button"
            name="name"
            onClick={this.handleButtonFilter}
          >
            Nome
          </button>

          <button
            className={`filters__item ${sorted === "country" ? "is-selected" : ""}`}
            type="button"
            name="country"
            onClick={this.handleButtonFilter}
          >
            País
          </button>

          <button
            className={`filters__item ${sorted === "company" ? "is-selected" : ""}`}
            type="button"
            name="company"
            onClick={this.handleButtonFilter}
          >
            Empresa
          </button>

          <button
            className={`filters__item ${sorted === "department" ? "is-selected" : ""}`}
            type="button"
            name="department"
            onClick={this.handleButtonFilter}
          >
            Departamento
          </button>

          <button
            className={`filters__item ${sorted === "admissionDate" ? "is-selected" : ""}`}
            type="button"
            name="admissionDate"
            onClick={this.handleButtonFilter}
          >
            Data de admissão
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;