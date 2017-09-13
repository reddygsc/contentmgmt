package com.voxlogic.contentmgmt.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.voxlogic.contentmgmt.config.AppConfiguration;
import com.voxlogic.contentmgmt.model.Data;



@Repository
public class DataRepository 
{
	
	@Autowired
	AppConfiguration appConfiguration;
	
	private static final String INSERT_DATA =  "INSERT INTO contact_details "
			+ "(webpage,phonenumber)"
			+ " VALUES(?,?)";

	
	public void insertData(Data data) throws Exception
	{
		JdbcTemplate jdbcTemplate = new JdbcTemplate();
		
		jdbcTemplate.setDataSource(appConfiguration.dataSource());
		
		
		for(String number: data.getNumbers()) {
		jdbcTemplate.update(INSERT_DATA,
				data.getWebpage(),
				number);
		}
	}
	
}
