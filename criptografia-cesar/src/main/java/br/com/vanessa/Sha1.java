package br.com.vanessa;

import java.math.BigInteger;
import java.security.MessageDigest;

public class Sha1 {
	String sha1 = "";

	public Sha1() {

	}

	public String criptografaSha1(String descriptografada) {

		try {

			MessageDigest digest = MessageDigest.getInstance("SHA-1");
			digest.reset();
			digest.update(descriptografada.getBytes("utf8"));
			sha1 = String.format("%040x", new BigInteger(1, digest.digest()));

		} catch (Exception e) {

			e.printStackTrace();

		}

		return sha1;

	}

}
