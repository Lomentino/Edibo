Uzdevums apraksts  
Analysis of Windows Event logs using Pandas DataFrame

Python Pandas is a library that provides data science capabilities to Python. Using this library, you can use data structures like DataFrames. 
This data structure allows you to model the data like an in-memory database. By doing so, you will get query-like capabilities over the data set.  

https://dzone.com/articles/using-python-pandas-for-log-analysis  

Event Logs: A log is a collection of sequences of events. Each sequence in a log represents the execution of a process instance (typically these events describe the same case id). 
The log object is equivalent to the notion of event logs, commonly used in process mining.  

http://pm4py.pads.rwth-aachen.de/documentation/working-with-event-data/


https://hello.global.ntt/en-us/insights/blog/log-analysis-an-effective-methodology  

Methodology overview

The successful analysis of log files requires the analyst to follow a Log Analysis Methodology. 
Figure 1 presents a reasonable Log Analysis Methodology to follow when conducting a log file investigation.
Four Stages of Log Analysis
Stage 1 Collection/Stage 2 Preparation/Stage 3 Modeling/Stage 4 Report & Presentation  

1.The Log Collection stage involves the identification of the devices or sources (e.g., applications, system, network device, security) and capturing log files that must be extracted for analysis. Preferably, the detail and robustness of the log files are decided during the requirement and design phase of the implemented systems and hopefully contain relevant events such as: 

    authentication successes and failures
    authorization failures
    application related events and errors
    modifications to configurations

2.The Log Preparation stage commences after the identified log files have been extracted and imported into a log analysis tool. The analyst should ensure their platform of choice can support big data size investigations. This includes, at a minimum, sufficient memory (RAM), ample disk drive space, effective CPU processing power, and the proper selection of a log analysis application that can scale.

It is during this phase that integrity should be checked; the analyst should perform visual and programmatic inspection to ensure each row (record) and column (field) is complete. First, the analyst must determine the structure of each log record/row. There are many different structures used for log files (e.g., Syslog, LEEF, W3C Extended Log File format, NetFlow, IPFix, Microsoft Windows Event Viewer format, NCSA Common Log Format). Next the analyst must select optimized column data types (e.g., Date/Time, Text, Integer). Finally, the log analyst must perform various log file clean up and/or tidy up procedures to ensure only relevant information is analyzed.  

Below is a summary of steps the analyst should take for effective and efficient log analysis:

    Filter or remove any unrelated rows, columns, and tables to reduce the size of the log files.
    Select the appropriate data types for each field or column. Some data types are searched faster than others.
    Use optimize filtering function techniques for conducting pattern searches (e.g., Regex, CIDR notation).
    
    3. While the figure presents the categories in univariate format and can be analysed individually, multivariate analysis can also be performed, as identified in line item 16 by combining 2 or more categories together. Figure 4 presents a simple multivariate comparison using the Temporal Analysis and Size Analysis categories. Whereas Figure 5, presents a more complex multivariate comparison using Source Linkage (client IP addresses) and Destination Linkage (email domains) categories.
    
    Summary

In summary, this blog post presents a log analysis methodology. While this article represents an effective log methodology, the ability of an analyst to collect, prepare, model, and present log analysis findings is critical for any intrusion investigation. Regardless of log file format, the analyst must be able to analyse log files and draw meaningful conclusions if the data resides within the log files. In addition, if required, the analyst must be able to utilize the log file data to predict future behaviour or attacks using predictive analytics.

References

    , J., & Lakhani, A. (2018). Investigating the Cyber Breach: The Digital Forensics Guide for the Network Engineer. Cisco Press.
    ,J., & Sanders, H. (2018). Malware Data Science: Attack Detection and Attribution. No Starch Press.
    “Go from Data to Insight to Action with Power BI Desktop.” What Is Power BI | Microsoft Power BI, powerbi.microsoft.com/en-us/desktop/.
    , A. (2018). Windows Security Monitoring: Scenarios and Patterns. John Wiley & Sons, Inc.

