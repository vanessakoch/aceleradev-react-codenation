package br.com.vanessa;


public class Answer {

	private int numero_casas;
	private String token;
	private String cifrado;
	private String decifrado;
	private String resumo_criptografico;

	public int getNumeroCasas() {
		return numero_casas;
	}

	public void setNumeroCasas(int numero_casas) {
		this.numero_casas = numero_casas;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getCifrado() {
		return cifrado;
	}

	public void setCifrado(String cifrado) {
		this.cifrado = cifrado;
	}

	public String getDecifrado() {
		return decifrado;
	}

	public void setDecifrado(String decifrado) {
		this.decifrado = decifrado;
	}

	public String getResumoCriptografico() {
		return resumo_criptografico;
	}

	public void setResumoCriptografico(String resumo_criptografico) {
		this.resumo_criptografico = resumo_criptografico;
	}
	
	@Override
	public String toString() {
		return "Informacoes [numero_casas=" + numero_casas + ", token=" + token + ", cifrado=" + cifrado
				+ ", decifrado=" + decifrado + ", resumo_criptografico=" + resumo_criptografico + "]";
	}

}