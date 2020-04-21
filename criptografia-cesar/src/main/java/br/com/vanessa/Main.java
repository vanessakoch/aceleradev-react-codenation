package br.com.vanessa;

import java.io.IOException;

public class Main {

	public static void main(String[] args) throws IOException {

		HttpService service = new HttpService();
		service.consultaJson();
	}

}
