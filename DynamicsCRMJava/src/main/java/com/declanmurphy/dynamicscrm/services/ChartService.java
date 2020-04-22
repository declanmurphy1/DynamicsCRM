package com.declanmurphy.dynamicscrm.services;

import com.declanmurphy.dynamicscrm.domain.Client;
import com.declanmurphy.dynamicscrm.domain.Opportunity;
import com.declanmurphy.dynamicscrm.domain.ChartData;
import com.declanmurphy.dynamicscrm.domain.StackedChartData;
import com.declanmurphy.dynamicscrm.repositories.ClientRepository;
import com.declanmurphy.dynamicscrm.repositories.OpportunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class ChartService {

    @Autowired
    private OpportunityRepository opportunityRepository;

    @Autowired
    private ClientRepository clientRepository;

    public Iterable<ChartData> pieChartData (){
        List<Opportunity> opps = opportunityRepository.findAll();

        int identifying = 0;
        int proposing = 0;
        int negotiating = 0;

        for(int i = 0; i<opps.size(); i++) {
            if (opps.get(i).getStage().equals("IDENTIFYING")) {
                identifying++;
            }
            if (opps.get(i).getStage().equals("PROPOSING")) {
                proposing++;
            }
            if (opps.get(i).getStage().equals("NEGOTIATING")) {
                negotiating++;
            }
        }

        List<ChartData> chartData = new ArrayList<>();
        chartData.add(new ChartData("Identifying Needs", identifying));
        chartData.add(new ChartData("Proposing", proposing));
        chartData.add(new ChartData("Negotiating", negotiating));

        return chartData;

    }

    public Iterable<ChartData> oppsByClient(){
        List<Client> clients = clientRepository.findAllByClientIdentifierIsNotNull();

        List<ChartData> data = new ArrayList<>();

        for (int i = 0; i<clients.size(); i++) {
            Client client = clients.get(i);
            List<Opportunity> opps = opportunityRepository.findAllByClientIdentifierAndStageNotContains(client.getClientIdentifier(), "CLOSED");
            int oppCount = opps.size();
            ChartData chartData = new ChartData(client.getClientName(),oppCount );
            data.add(chartData);
        }

        Collections.sort(data, Collections.reverseOrder());

        return data;

    }

    public Iterable<ChartData> oppValueByClient(){
        List<Client> clients = clientRepository.findAllByClientIdentifierIsNotNull();

        List<ChartData> data = new ArrayList<>();

        for (int i = 0; i<clients.size(); i++) {
            Client client = clients.get(i);
            List<Opportunity> opps = opportunityRepository.findAllByClientIdentifierAndStageNotContains(client.getClientIdentifier(), "CLOSED");
            double value = 0;
            for (int j = 0; j < opps.size(); j++) {
                value += opps.get(j).getOppValue();
            }

            ChartData chartData = new ChartData(client.getClientName(),(int) Math.round(value));
            data.add(chartData);
        }

        Collections.sort(data, Collections.reverseOrder());

        return data;

    }

    public Iterable<StackedChartData> outcomesByClient(){
        List<Client> clients = clientRepository.findAllByClientIdentifierIsNotNull();

        List<StackedChartData> data = new ArrayList<>();

        for (int i = 0; i<clients.size(); i++) {
            Client client = clients.get(i);
            List<Opportunity> opps = opportunityRepository.findAllByClientIdentifierAndStageEquals(client.getClientIdentifier(), "CLOSED");
            int oppCount = opps.size();
            int won = 0;
            int lost = 0;
            int withdrawn = 0;
            for (int j = 0; j<opps.size(); j++) {
                Opportunity opp = opps.get(j);
                if (opp.getOutcome().equals(2)) {
                    won++;
                }
                if (opp.getOutcome().equals(3)) {
                    withdrawn++;
                }
                if (opp.getOutcome().equals(4)) {
                    lost++;
                }
            }

            StackedChartData stackedChartData = new StackedChartData(client.getClientName(), won, lost, withdrawn, oppCount);
            data.add(stackedChartData);
        }

        Collections.sort(data, Collections.reverseOrder());

        return data;

    }



}
