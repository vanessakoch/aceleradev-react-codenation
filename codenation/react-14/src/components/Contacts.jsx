import React, { Component } from "react";

class Contacts extends Component {

	render() {
	
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data" data-testid="contact-name">Nome</span>
						<span className="contact__data" data-testid="contact-phone">Telefone</span>
						<span className="contact__data" data-testid="contact-country">País</span>
						<span className="contact__data" data-testid="contact-date">Admissão</span>
						<span className="contact__data" data-testid="contact-company">Empresa</span>
						<span className="contact__data" data-testid="contact-department">Departamento</span>
					</article>
					{this.props.children}
				</section>
			</div>
		);

	}
}

export default Contacts;