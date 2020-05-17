package br.com.vanessa;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.FileBody;
import org.json.JSONObject;

public class HttpService {
	public void writeJson(JSONObject json) {
		FileWriter escrever = null;
		try {
			escrever = new FileWriter("answer.json");
			escrever.write(json.toString());
			escrever.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	public Answer readFile() {
		Answer informacoes = new Answer();

		JSONObject jsonObject;
		FileReader fileReader;
		BufferedReader bufferedReader;
		StringBuilder stringBuilder;
		String jsonString;

		try {
			fileReader = new FileReader("answer.json");
			bufferedReader = new BufferedReader(fileReader);
			stringBuilder = new StringBuilder();

			while ((jsonString = bufferedReader.readLine()) != null) {
				stringBuilder = stringBuilder.append(jsonString);
			}

			bufferedReader.close();
			fileReader.close();

			jsonObject = new JSONObject(stringBuilder.toString());

			informacoes.setNumeroCasas(jsonObject.getInt("numero_casas"));
			informacoes.setToken(jsonObject.getString("token"));
			informacoes.setCifrado(jsonObject.getString("cifrado"));
			informacoes.setDecifrado(jsonObject.getString("decifrado"));
			informacoes.setResumoCriptografico(jsonObject.getString("resumo_criptografico"));

		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();

		}

		return informacoes;
	}

	public String consultaJson() {
		Answer answerInfo = new Answer();

		URL url;
		HttpURLConnection connection;
		String resposta = "";
		JSONObject json;

		try {

			url = new URL(
					"https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=b92d98cf9e16ddcdaa32ad97dfa33d431ee3d51b");
			connection = (HttpURLConnection) url.openConnection();
			connection.setRequestMethod("GET");
			connection.connect();

			Scanner sc = new Scanner(url.openStream());

			while (sc.hasNext()) {
				resposta += sc.nextLine();
			}

			sc.close();

			json = new JSONObject(resposta);

			writeJson(json);
			answerInfo = readFile();

			String criptografada = "yaiikyy oy tuz luxkbkx gtj lgoraxk oy tuz lgzgr. jut ynarg";

			CifraCesar cifra = new CifraCesar();
			Sha1 sha = new Sha1();

			String descriptografada = cifra.descriptografar(criptografada, 6);
			String sha1 = sha.criptografaSha1(descriptografada);

			answerInfo.setDecifrado(descriptografada);
			answerInfo.setResumoCriptografico(sha1);

			json = new JSONObject(answerInfo);
			resposta = json.toString();

			writeJson(json);
			readFile();

			sendJson();

			System.out.println(readFile());

		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		return resposta;
	}

	@SuppressWarnings("deprecation")
	public boolean sendJson() {
		boolean resposta = false;

		try {
			URL url = new URL(
					"https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=b92d98cf9e16ddcdaa32ad97dfa33d431ee3d51b");

			HttpURLConnection connection = (HttpURLConnection) url.openConnection();

			connection.setDoOutput(true);
			connection.setRequestMethod("POST");

			FileBody fileBody = new FileBody(new File("answer.json"));

			MultipartEntity multipartEntity = new MultipartEntity(HttpMultipartMode.STRICT);
			multipartEntity.addPart("answer", fileBody);

			connection.setRequestProperty("Content-Type", multipartEntity.getContentType().getValue());
			OutputStream out = connection.getOutputStream();

			try {
				multipartEntity.writeTo(out);

			} finally {
				out.close();
			}

			int status = connection.getResponseCode();

			if (status == 200) {
				resposta = true;
				System.out.println("Status: " + status);
			} else {
				resposta = false;
				System.out.println("Status: " + status);
				System.out.println(connection.getContent());
			}

		} catch (Exception e) {
			resposta = false;
			System.out.println(e.getMessage());
			e.printStackTrace();
		}

		return resposta;

	}

}
