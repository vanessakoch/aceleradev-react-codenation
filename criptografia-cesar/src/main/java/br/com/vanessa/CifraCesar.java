package br.com.vanessa;

public class CifraCesar {

	public CifraCesar() {
	}

	public String descriptografar(String criptografada, int chave) {

		StringBuilder descriptografado = new StringBuilder();

		criptografada.chars().forEach(letra -> descriptografado.append(substituiLetra(letra, chave)));

		return descriptografado.toString();
	}

	private char substituiLetra(int letra, int chave) {

		if (letra < 97 || letra > 122) {
			return (char) letra;
		}

		letra -= chave;

		if (letra < 97) {
			letra = 122 - (96 - letra);
		}
		return (char) letra;
	}

}
