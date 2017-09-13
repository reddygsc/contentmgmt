package com.voxlogic.contentmgmt.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voxlogic.contentmgmt.dao.DataRepository;
import com.voxlogic.contentmgmt.model.Data;
import com.voxlogic.contentmgmt.model.DataMessage;
import com.voxlogic.contentmgmt.services.DataCollectService;


@Service
public class DataCollectServiceImpl implements DataCollectService
{

	@Autowired
	private DataRepository dataRepository;
	
	@Override
	public DataMessage populateData(Data data) 
	{
		DataMessage dataMessage = new DataMessage();
		
		
		try
		{
			dataRepository.insertData(data);
			dataMessage.setStatus("Success");
			dataMessage.setData(data);
			dataMessage.setMessage("Data Populated Successfully.");
		}
		catch(Exception e)
		{
			dataMessage.setStatus("Failed");
			dataMessage.setData(data);
			dataMessage.setMessage(e.getMessage());
		}
		
		return dataMessage;
	}
	

}
