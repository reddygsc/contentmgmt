package com.voxlogic.contentmgmt.config;

import java.sql.SQLException;
import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import javax.sql.DataSource;
import javax.validation.constraints.NotNull;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("db")
public class AppConfiguration 
{
	@NotNull
	private String username;
	
	@NotNull
	private String password;
	
	@NotNull
	private String url;
	
	@NotNull
	private String driver;
	
	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getDriver() {
		return driver;
	}

	public void setDriver(String driver) {
		this.driver = driver;
	}

	 @Bean
	 public DataSource dataSource() throws SQLException 
	 {
		 	BasicDataSource ds = new BasicDataSource();
		 	
		 	ds.setDriverClassName(this.driver);
            ds.setUrl(this.url);
            ds.setUsername(this.username);
            ds.setPassword(this.password);
		 	
	        return ds;
	 }
	 
}
