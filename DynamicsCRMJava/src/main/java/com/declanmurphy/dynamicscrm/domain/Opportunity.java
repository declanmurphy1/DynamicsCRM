package com.declanmurphy.dynamicscrm.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
public class Opportunity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(updatable = false, unique = true)
    private String clientSequence;

    @NotBlank(message = "Opportunity Name is required")
    private String oppName;
    private String description;
    private String stage;
    private Integer outcome;
    @NotNull(message = "Close Date is required")
    private Date closeDate;

//    Many to One with the backlog
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "backlog_id", updatable = false, nullable = false)
    @JsonIgnore
    private Backlog backlog;


    @Column(updatable = false)
    private String clientIdentifier;
    private Date create_At;
    private Date update_At;

    public Opportunity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getClientSequence() {
        return clientSequence;
    }

    public void setClientSequence(String clientSequence) {
        this.clientSequence = clientSequence;
    }

    public String getOppName() {
        return oppName;
    }

    public void setOppName(String oppName) {
        this.oppName = oppName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStage() {
        return stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

    public Integer getOutcome() {
        return outcome;
    }

    public void setOutcome(Integer outcome) {
        this.outcome = outcome;
    }

    public Date getCloseDate() {
        return closeDate;
    }

    public void setCloseDate(Date closeDate) {
        this.closeDate = closeDate;
    }

    public String getClientIdentifier() {
        return clientIdentifier;
    }

    public void setClientIdentifier(String clientIdentifier) {
        this.clientIdentifier = clientIdentifier;
    }

    public Date getCreate_At() {
        return create_At;
    }

    public void setCreate_At(Date create_At) {
        this.create_At = create_At;
    }

    public Date getUpdate_At() {
        return update_At;
    }

    public void setUpdate_At(Date update_At) {
        this.update_At = update_At;
    }

    public Backlog getBacklog() {
        return backlog;
    }

    public void setBacklog(Backlog backlog) {
        this.backlog = backlog;
    }

    @PrePersist
    protected void onCreate() {
        this.create_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.update_At = new Date();
    }

    @Override
    public String toString() {
        return "Opportunity{" +
                "id=" + id +
                ", clientSequence='" + clientSequence + '\'' +
                ", oppName='" + oppName + '\'' +
                ", description='" + description + '\'' +
                ", stage='" + stage + '\'' +
                ", outcome=" + outcome +
                ", closeDate=" + closeDate +
                ", clientIdentifier='" + clientIdentifier + '\'' +
                ", create_At=" + create_At +
                ", update_At=" + update_At +
                '}';
    }
}
