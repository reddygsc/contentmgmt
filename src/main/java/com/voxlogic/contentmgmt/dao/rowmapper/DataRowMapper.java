package com.voxlogic.contentmgmt.dao.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.voxlogic.contentmgmt.model.Data;



  

public class DataRowMapper implements RowMapper<Data>{

	@Override
	public Data mapRow(ResultSet rs, int rowNum) throws SQLException {
		Data data = new Data();
		
		data.setWebpage(rs.getString("webpage"));
		//data.setNumbers(rs.getString("phonenumber"));
		
		
		return data;
	}
}
