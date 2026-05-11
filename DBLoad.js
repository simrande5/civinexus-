// Connect to the CivicNexus smart city database
db = db.getSiblingDB('civicnexus');

// Clear existing collections
db.urban_environment_data.drop();
db.personnel_data.drop();
db.system_operational_logs.drop();

// Insert urban and environmental data
db.urban_environment_data.insertMany([
    {
        record_id: "traffic-flow-001",
        data_type: "traffic_flow_monitor",
        location: "Central Avenue / Sector 4",
        timestamp: new Date("2026-04-29T08:15:00Z"),
        reading_value: 428,
        unit: "vehicles/hour",
        metadata: {
            sensor_vendor: "CivicSense",
            status: "normal"
        }
    },
    {
        record_id: "air-quality-014",
        data_type: "air_quality_reading",
        location: "Riverside Monitoring Station",
        timestamp: new Date("2026-04-29T08:20:00Z"),
        reading_value: 41,
        unit: "AQI",
        metadata: {
            pm25: 12,
            pm10: 18,
            status: "good"
        }
    }
]);

// Insert personnel data
db.personnel_data.insertMany([
    {
        employee_id: "CN-001",
        name: "Dr. Maya Patel",
        job_role: "Urban Planner",
        contact: "maya.patel@civicnexus.local",
        security_clearance: "Level 3"
    },
    {
        employee_id: "CN-014",
        name: "Jordan Ellis",
        job_role: "Field Technician",
        contact: "jordan.ellis@civicnexus.local",
        security_clearance: "Level 2"
    }
]);

// Insert system and operational logs
db.system_operational_logs.insertMany([
    {
        log_id: "log-traffic-9001",
        timestamp: new Date("2026-04-29T08:25:00Z"),
        subsystem: "Traffic Light Control",
        event_type: "sequence_update",
        details: {
            junction: "A12",
            plan: "peak_morning_adjustment",
            green_seconds: 42
        }
    },
    {
        log_id: "log-waste-9002",
        timestamp: new Date("2026-04-29T08:40:00Z"),
        subsystem: "Waste Management Dispatch",
        event_type: "route_optimised",
        details: {
            district: "North Dock",
            crew_id: "WM-07",
            pickup_priority: "high"
        }
    },
    {
        log_id: "log-transport-9003",
        timestamp: new Date("2026-04-29T08:55:00Z"),
        subsystem: "Public Transport Dispatch",
        event_type: "service_alert",
        details: {
            line: "TR-16",
            status: "minor_delay",
            reason: "signal_check_in_progress"
        }
    }
]);

print("CivicNexus database populated successfully.");
